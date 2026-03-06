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
      theme: this.$persist('light'),
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
