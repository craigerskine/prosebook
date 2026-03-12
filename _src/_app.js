// instant page
import 'instant.page';

// icons
import 'iconify-icon';

// alpinejs
import Alpine from 'alpinejs';
import anchor from '@alpinejs/anchor';
import focus from '@alpinejs/focus';
import persist from '@alpinejs/persist';
import tippy from 'tippy.js';

document.addEventListener('alpine:init', () => {
  Alpine.data('app', function() {
    return {
      menu: false,
      theme: this.$persist('light'),
      searchTerm: '',
      searchData: [],

      slugify(text) {
        return text?.toString()
          .toLowerCase()
          .normalize('NFKD')
          .trim()
          .toLowerCase()
          .replace(/[^\w\-]+/g, '-')
          .replace(/\s+/g, '-')
          .replace(/-+/g, '-')
      },

      get filteredResults() {
        return this.searchData.filter(item =>
          item.title.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          item.category.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          item.keywords.some(keyword => keyword.toLowerCase().includes(this.searchTerm.toLowerCase()))
        );
      },
      searchOpen() {
        this.$refs.searchDialog.showModal();
        setTimeout(() => {
          this.$nextTick(() => {
            this.$refs.searchInput.focus();
          });
        }, 50);
      },

      setTheme(newTheme, event) {
        const btn = event.currentTarget;
        const rect = btn.getBoundingClientRect();
        const x = (rect.left + rect.width / 2) + 'px';
        const y = (rect.top + rect.height / 2) + 'px';
        document.documentElement.style.setProperty('--click-x', x);
        document.documentElement.style.setProperty('--click-y', y);
        if (!document.startViewTransition) {
          this.theme = newTheme;
          return;
        }
        document.startViewTransition(() => {
          this.theme = newTheme;
        });
      },

      async init() {
        // search
        const response = await fetch('/search/search.json');
        this.searchData = await response.json();

        // menu focus/blur
        this.$watch('menu', (value) => {
          if (value) {
            this.$nextTick(() => {
              this.$refs.menuMain.focus();
            });
          } else {
            this.$nextTick(() => {
              this.$refs.menuMain.blur();
            });
          }
        });

        // menu open details
        const details = Array.from(this.$el.querySelectorAll('details[name=menu-main]'));
        if (!details.length) return;
        const activeDetails = details.find(d =>
          d.querySelector('[aria-current=page],.menu-current')
        );
        const toOpen = activeDetails ?? details[0];
        details.forEach(d => (d.open = false));
        toOpen.open = true;
      }
    }
  });
  
  // tooltip
  // magic: @focus="$tooltip('some tooltip')"
  Alpine.magic('tooltip', el => message => {
    let instance = tippy(el, {
      content: message,
      trigger: 'manual',
    });

    const onEscape = (e) => {
      if (e.key === 'Escape') cleanup();
    };

    const cleanup = () => {
      instance.hide();
      setTimeout(() => instance.destroy(), 0);
      document.removeEventListener('keydown', onEscape);
      el.removeEventListener('mouseleave', cleanup);
      el.removeEventListener('blur', cleanup);
    };

    document.addEventListener('keydown', onEscape);
    el.addEventListener('mouseleave', cleanup);
    el.addEventListener('blur', cleanup);

    instance.show();

    setTimeout(cleanup, 2000);
  });

  Alpine.directive('tooltip', (el, { expression }, { evaluate }) => {
    const instance = tippy(el, {
      content: evaluate(expression),
    });

    const onEscape = (e) => {
      if (e.key === 'Escape') {
        instance.hide();
      }
    };

    document.addEventListener('keydown', onEscape);

    el._tippyCleanup = () => {
      document.removeEventListener('keydown', onEscape);
      instance.destroy();
    };
  });

  document.addEventListener('alpine:clean', (e) => {
    const el = e.target;
    if (el._tippyCleanup) {
      el._tippyCleanup();
      delete el._tippyCleanup;
    }
  });
});

Alpine.plugin([anchor, focus, persist]);
window.Alpine = Alpine;
Alpine.start();
