// Test suite for Sunny Side Lemonade website
import { test } from 'node:test';
import assert from 'node:assert';
import { readFileSync } from 'node:fs';

let html;
try {
  html = readFileSync('index.html', 'utf8');
} catch (e) {
  html = null;
}

test('index.html exists', () => {
  assert.notStrictEqual(html, null);
});

test('has hero element', () => {
  assert.match(html, /<header[^>]*id=["']hero["'][^>]*>/);
});

test('has menu section', () => {
  assert.match(html, /<section[^>]*id=["']menu["'][^>]*>/);
});

test('has hours section', () => {
  assert.match(html, /<section[^>]*id=["']hours["'][^>]*>/);
});

test('has contact section', () => {
  assert.match(html, /<section[^>]*id=["']contact["'][^>]*>/);
});
