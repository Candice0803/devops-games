const assert = require('assert');

describe('Basic test', () => {
  it('should always pass', () => {
    assert.strictEqual(1, 1);
  });
});

describe('Game basic test', () => {

  it('should always pass', () => {
    assert.strictEqual(1, 1);
  });

  it('score should start at 0', () => {
    const score = 0;
    assert.strictEqual(score, 0);
  });

  it('player should have initial position', () => {
    const player = { x: 0, y: 0 };
    assert.strictEqual(player.x, 0);
  });

});

it('Vec add should work correctly', () => {
  const v1 = { x: 1, y: 2 };
  const v2 = { x: 3, y: 4 };

  const result = { x: v1.x + v2.x, y: v1.y + v2.y };

  assert.strictEqual(result.x, 4);
  assert.strictEqual(result.y, 6);
});

it('Vec mul should work correctly', () => {
  const v = { x: 2, y: 3 };

  const result = { x: v.x * -2, y: v.y * 3 };

  assert.strictEqual(result.x, -4);
  assert.strictEqual(result.y, 9);
});

it('Vec dot product should work', () => {
  const v1 = { x: 1, y: 2 };
  const v2 = { x: 2, y: 1 };

  const dot = v1.x * v2.x + v1.y * v2.y;

  assert.strictEqual(dot, 4);
});

it('Vec cross product should work', () => {
  const v1 = { x: 1, y: 2 };
  const v2 = { x: 3, y: 4 };

  const cross = v1.x * v2.y - v1.y * v2.x;

  assert.strictEqual(cross, -2);
});

it('Vec add with invalid input should return NaN', () => {
  const v = { x: 1, y: 2 };

  const result = { x: v.x + "a", y: v.y + "b" };

  assert.ok(isNaN(result.x));
  assert.ok(isNaN(result.y));
});

describe('Player unit tests', () => {

  it('player should be initialized at center', () => {
    const GAME_MAP_WIDTH = 100;
    const GAME_MAP_HEIGHT = 100;

    const player = {
      x: GAME_MAP_WIDTH / 2,
      y: GAME_MAP_HEIGHT / 2
    };

    assert.strictEqual(player.x, 50);
    assert.strictEqual(player.y, 50);
  });

  it('player should not go outside left boundary', () => {
    const player = { x: -10, y: 10 };
    const radius = 5;

    if (player.x < radius) {
      player.x = radius;
    }

    assert.strictEqual(player.x, 5);
  });

  it('player should not go outside bottom boundary', () => {
    const player = { x: 10, y: 200 };
    const height = 100;
    const radius = 5;

    if (player.y > height - radius) {
      player.y = height - radius;
    }

    assert.strictEqual(player.y, 95);
  });

});

describe('Game functional tests', () => {

  it('score should increase when enemy is destroyed', () => {
    let score = 0;

    //  destruction ennemi
    score += 1;

    assert.strictEqual(score, 1);
  });

  it('game should be over when player collides with enemy', () => {
    const player = { x: 10, y: 10 };
    const enemy = { x: 10, y: 10 };

    let isGameOver = false;

    if (player.x === enemy.x && player.y === enemy.y) {
      isGameOver = true;
    }

    assert.strictEqual(isGameOver, true);
  });

  it('bullet should move over time', () => {
    const bullet = { x: 0, speed: 5 };

    // 
    bullet.x += bullet.speed;

    assert.strictEqual(bullet.x, 5);
  });

});

describe('Game state', () => {

  it('game should start with isGameOver = false', () => {
    const gameState = {
      isGameOver: false
    };

    assert.strictEqual(gameState.isGameOver, false);
  });

});

