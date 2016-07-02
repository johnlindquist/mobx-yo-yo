(function(global) {
  const map = {
    'app': 'app',
    'bel': 'https://npmcdn.com/bel',
    'global/document': 'https://npmcdn.com/global/document',
    'global/window': 'https://npmcdn.com/global/window',
    'hyperx': 'https://npmcdn.com/hyperx',
    'hyperscript-attribute-to-property': 'https://npmcdn.com/hyperscript-attribute-to-property',
    'min-document': 'https://npmcdn.com/min-document',
    'mobx': 'https://npmcdn.com/mobx',
    'morphdom': 'https://npmcdn.com/morphdom',
    'on-load': 'https://npmcdn.com/on-load',
    'ts': 'https://npmcdn.com/plugin-typescript@4.0.10/lib/plugin.js',
    'typescript': 'https://npmcdn.com/typescript@1.8.10/lib/typescript.js',
    'yo-yo': 'https://npmcdn.com/yo-yo@1.2.2'
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
