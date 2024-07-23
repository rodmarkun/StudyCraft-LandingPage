// src/lib/utils/intersectionObserver.js
import { onMount } from 'svelte';

export function intersectionObserver(node, options) {
  let observer;

  onMount(() => {
    observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        node.dispatchEvent(new CustomEvent('intersect', {
          detail: entry.isIntersecting
        }));
      });
    }, options);

    observer.observe(node);

    return () => observer.disconnect();
  });

  return {
    destroy() {
      if (observer) observer.disconnect();
    }
  };
}