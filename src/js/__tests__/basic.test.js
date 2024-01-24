import sum from '../basic';
import { hp, sor } from '../app';

test('should sum', () => {
  const result = sum([1, 2, 3]);

  expect(result).toBe(6);
});

test('testing power finction healthy', () => {
  const res = { 'name': 'Маг', 'health': 90 };
  const answer = 'healthy';
  const fun = hp(res);

  expect(fun).toBe(answer);
});

test('testing power finction wounded', () => {
  const res = { 'name': 'Маг', 'health': 46 };
  const answer = 'wounded';
  const fun = hp(res);

  expect(fun).toBe(answer);
});

test('testing power finction critical', () => {
  const res = { 'name': 'Маг', 'health': 10 };
  const answer = 'critical';
  const fun = hp(res);

  expect(fun).toBe(answer);
});

test('sorting array', () => {
  const ar = [
    {'name': 'мечник', 'health': 10},
    {'name': 'маг', 'health': 100},
    {'name': 'лучник', 'health': 80},
  ];
  const result = [
    {'name': 'маг', 'health': 100},
    {'name': 'лучник', 'health': 80},
    {'name': 'мечник', 'health': 10},
  ];
  const fun = sor(ar);

  expect(fun).toEqual(result);
});