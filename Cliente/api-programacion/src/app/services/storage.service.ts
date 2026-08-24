import { Injectable, inject, Injector, signal, effect, runInInjectionContext } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class StorageService {
  private injector = inject(Injector);

  persistenteSignal<T>(key: string, initialValue: T) {
    const saved = localStorage.getItem(key);
    const value = saved ? JSON.parse(saved) : initialValue;
    const sig = signal<T>(value);

    runInInjectionContext(this.injector, () => {
      effect(() => {
        localStorage.setItem(key, JSON.stringify(sig()));
      });
    });

    return sig;
  }
}
