# Arquitectura del backend

Capas + carpeta por módulo (menu, order, payment, table-session). Evita amontonar controllers/use cases en una sola carpeta.

Las carpetas se crean al codear cada feature (no se dejan vacías de antemano).

```text
src/
  domain/            # reglas de negocio (sin Nest, sin Prisma)
  application/       # casos de uso
  infrastructure/    # Prisma, adapters externos
  presentation/      # HTTP (controllers, DTOs)
```

## Flujo

```text
HTTP → presentation → application → domain
                         ↓
                  infrastructure
```

## Qué va en cada capa

| Capa | Rol | Ejemplo |
| --- | --- | --- |
| `domain/` | Entidades, state machines, errores de negocio | `Order` no puede pasar de `draft` a `ready` |
| `application/` | Orquesta un caso de uso | `CreateOrder`, `ConfirmMockPayment` |
| `infrastructure/` | Detalles técnicos | Prisma repos, `MockPaymentAdapter` |
| `presentation/` | Entrada/salida HTTP | Controllers, DTOs, mapear errores a status codes |

## Carpetas por módulo

Dentro de cada capa (cuando aplique):

```text
presentation/
  menu/
  order/
  payment/
  table-session/

application/
  menu/
  order/
  payment/
  table-session/
  shared/            # helpers transversales de application

domain/
  menu/
  order/
  payment/
  table-session/
  shared/            # errores base, tipos comunes

infrastructure/
  persistence/       # repos Prisma por módulo
    menu/
    order/
    payment/
    table-session/
  payment/           # adapters de pago (mock, etc.)
```

## Reglas cortas

1. `presentation` no conoce Prisma.
2. `domain` no importa Nest ni Prisma.
3. Un controller delgado: valida → llama use case → responde.
4. Precios y estados se resuelven en domain/application, nunca en el client.
