(function(global) {
  const map = {
    'app': 'app',
    'bel': 'https://unpkg.com/bel',
    'global/document': 'https://unpkg.com/global/document',
    'global/window': 'https://unpkg.com/global/window',
    'hyperx': 'https://unpkg.com/hyperx',
    'hyperscript-attribute-to-property': 'https://unpkg.com/hyperscript-attribute-to-property',
    'min-document': 'https://unpkg.com/min-document',
    'mobx': 'https://unpkg.com/mobx',
    'morphdom': 'https://unpkg.com/morphdom',
    'on-load': 'https://unpkg.com/on-load',
    'ts': 'https://unpkg.com/plugin-typescript@4.0.10/lib/plugin.js',
    'typescript': 'https://unpkg.com/typescript@1.8.10/lib/typescript.js',
    'yo-yo': 'https://unpkg.com/yo-yo@1.2.2'
 };

  const packages = {
    'app':                        { main: 'main.ts',  defaultExtension: 'ts' },
    'symbol-observable': {main: 'index.js'},
    'yo-yo': {main: 'index.js'}
  };

  const config = {
    transpiler: 'typescript',
    typescriptOptions: {
      emitDecoratorMetadata: true
    },

    map: map,
    packages: packages
  }

  System.config(config);

})(this);
