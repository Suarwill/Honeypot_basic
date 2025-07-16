# Honeypot Basic

## Descripción
Este proyecto implementa un honeypot básico diseñado para analizar y registrar los intentos de acceso no autorizados. Utiliza contenedores Docker para simular un entorno realista y redirigir a los atacantes a un backend falso tras superar un límite de intentos fallidos.

## Estructura del Proyecto
- **Backend**: Contiene el backend funcional que simula un sistema legítimo.
- **Honeypot**: Incluye el backend falso que registra las actividades de los atacantes.
- **Nginx**: Administra los intentos de conexión desde una misma IP. Si se superan los 65 intentos fallidos, redirige al backend falso.
- **main.sh**: Script Bash que actúa como un menú para levantar los contenedores Docker y realizar pruebas.

## Lógica del Sistema
1. El script `main.sh` se utiliza para iniciar los contenedores Docker.
2. Nginx monitorea los intentos de inicio de sesión desde una misma IP.
3. Tras 65 intentos fallidos, la conexión se redirige al backend falso.
4. El backend falso puede registrar las actividades del atacante, permitiendo analizar su comportamiento y "modus operandi".

## Posibles Mejoras
- Implementar un sistema de registro más detallado en el backend falso para capturar las acciones del atacante.
- Escalar el proyecto para incluir análisis automatizado de los datos recopilados.
- Integrar notificaciones en tiempo real para alertar sobre intentos de acceso sospechosos.

## Conclusión
Este proyecto es una implementación básica de un honeypot, ideal para comprender los conceptos fundamentales de seguridad y monitoreo de accesos no autorizados.

## Requisitos
- Docker
- Bash

## Uso
1. Clona este repositorio:
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd Honeypot
   ```