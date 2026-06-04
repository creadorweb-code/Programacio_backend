
import { jest, describe, test, expect, beforeAll, afterEach } from '@jest/globals';
import request from 'supertest';

// Mocks del modelo
const mockCreate = jest.fn();
const mockFind = jest.fn();
const mockFindById = jest.fn();
const mockFindByIdAndUpdate = jest.fn();
const mockFindByIdAndDelete = jest.fn();

// Evita conexión real a MongoDB
jest.unstable_mockModule('../conexion.js', () => ({
  default: {}
}));

// Mock de mongoose
jest.unstable_mockModule('mongoose', () => {
  class Schema {}

  return {
    default: {
      connect: jest.fn(),
      Schema,
      model: jest.fn(() => ({
        create: mockCreate,
        find: mockFind,
        findById: mockFindById,
        findByIdAndUpdate: mockFindByIdAndUpdate,
        findByIdAndDelete: mockFindByIdAndDelete
      }))
    }
  };
});

let api;

beforeAll(async () => {
  await import('../index.js');
  api = request('http://localhost:3000');
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('GET /', () => {
  test('Debe mostrar mensaje de bienvenida', async () => {
    const res = await api.get('/');

    expect(res.status).toBe(200);
    expect(res.text).toContain('Bienvenido');
  });
});

describe('POST /usuarios', () => {
  test('Debe crear un usuario', async () => {
    const usuario = {
      nombre: 'Ana',
      edad: 25,
      correo: 'ana@mail.com'
    };

    mockCreate.mockResolvedValueOnce({
      _id: '1',
      ...usuario
    });

    const res = await api
      .post('/usuarios')
      .send(usuario);

    expect(res.status).toBe(201);
    expect(res.body.nombre).toBe('Ana');
  });
});

describe('GET /usuarios', () => {
  test('Debe obtener todos los usuarios', async () => {
    mockFind.mockResolvedValueOnce([
      {
        _id: '1',
        nombre: 'Ana'
      }
    ]);

    const res = await api.get('/usuarios');

    expect(res.status).toBe(200);
    expect(res.body.length).toBe(1);
  });
});

describe('GET /usuarios/:id', () => {
  test('Debe obtener un usuario por ID', async () => {
    mockFindById.mockResolvedValueOnce({
      _id: '1',
      nombre: 'Ana'
    });

    const res = await api.get('/usuarios/1');

    expect(res.status).toBe(200);
    expect(res.body.nombre).toBe('Ana');
  });
});

describe('PUT /usuarios/:id', () => {
  test('Debe actualizar un usuario', async () => {
    mockFindByIdAndUpdate.mockResolvedValueOnce({
      _id: '1',
      nombre: 'Ana Actualizada'
    });

    const res = await api
      .put('/usuarios/1')
      .send({
        nombre: 'Ana Actualizada'
      });

    expect(res.status).toBe(200);
    expect(res.body.nombre).toBe('Ana Actualizada');
  });
});

describe('DELETE /usuarios/:id', () => {
  test('Debe eliminar un usuario', async () => {
    mockFindByIdAndDelete.mockResolvedValueOnce({
      _id: '1'
    });

    const res = await api.delete('/usuarios/1');

    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Usuario eliminado');
  });
});