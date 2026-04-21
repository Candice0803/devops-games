// Faux navigateur pour les tests
// const { JSDOM } = require('jsdom');
// const dom = new JSDOM('<!DOCTYPE html><html><body></body></html>');
// global.window = dom.window;
// global.document = dom.window.document;
// global.navigator = dom.window.navigator;

// Empêche d'utiliser l'audio dans l'environnement de test, sinon ça plante
// const mockAudio = {
//   value: 0,
//   connect: () => ({}),
//   setValueAtTime: () => ({}),
//   createGain: () => mockAudio,
//   createOscillator: () => mockAudio,
//   destination: {},
//   gain: { value: 0, setValueAtTime: () => {} }
// };
// global.AudioContext = class { constructor() { return mockAudio; } };
// global.AudioNode = class {};
// global.GainNode = class {};

require('@babel/register'); 
const assert = require('assert');
const math = require('../../src/math.js');

// On neutralise audio.js qui fait planter le reste
// require.cache[require.resolve('../../src/audio.js')] = {
//   exports: { audio_init: () => {}, audio_play: () => {} }
// };

const player = require('../../src/player.js');

describe('Tests unitaires et fonctionnels', () => {

    // TESTS UNITAIRES
    it('Test lerp', () => { assert.strictEqual(math.lerp(1, 3, 20), 41); });
    
    it('Test mapLinear', () => { assert.strictEqual(Math.round(math.mapLinear(1, 2, 3, 4, 5)), 3); });

    it('Test randFloat', () => { 
        const r = math.randFloat(-1, 1); 
        assert.ok(r <= 1 && r >= -1); 
    });

    it('Test randFloatSpread', () => { 
        const r = math.randFloatSpread(1); 
        assert.ok(r <= 0.5 && r >= -0.5); 
    });

    it('Test clamp', () => { 
        assert.strictEqual(math.clamp(10, 0, 5), 5); 
    });

    // TESTS FONCTIONNELS
    it('Vérifie création joueur', () => { 
        const p = player.player_create(); 
        assert.ok(p, 'Le joueur devrait être créé'); 
    });

    it('Vérifie que le joueur possède des propriétés de base', () => {
        const p = player.player_create();
        assert.ok(Object.keys(p).length > 0, 'Le joueur devrait avoir des propriétés');
    });

    it('Vérifie que le joueur est prêt pour le rendu', () => {
        const p = player.player_create();
        const keys = Object.keys(p);
        assert.ok(keys.length > 0, 'Le joueur devrait avoir été initialisé avec des données');
    });
});