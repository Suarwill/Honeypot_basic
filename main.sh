#!/bin/bash
echo "Instalador de PROYECTO HONEY"
echo "Elija la opcion deseada:"

echo "1. Levantar Proyecto Honey"
echo "2. Test"
echo "3. Salir"
echo

read -p "Ingrese su opcion: " opcion
if [ "$opcion" -eq 1 ]; then
    echo "Levantando Proyecto Honey..."
    docker compose up --build
elif [ "$opcion" -eq 2 ]; then
    echo "Ejecutando test..."
    for i in {1..105}; 
        do curl -X POST http://localhost/login 
        echo;
    done
    echo "Test completado."
    echo "Esperando 15 segundos antes de salir..."
    sleep 15
else
    echo "Saliendo..."
    exit 0
fi