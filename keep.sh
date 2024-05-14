#!/bin/bash

# Función para recorrer las carpetas recursivamente
traverse_directory() {
    local dir="$1"
    for file in "$dir"/*; do
        if [ -d "$file" ]; then
            if isEmptyDirectory "$file"; then
                # Si está vacío, crear el archivo .gitkeep
                touch "$file/.gitkeep"
                echo "Se creó .gitkeep en $file"
            else
                # Si no está vacío, seguir recorriendo
                traverse_directory "$file"
            fi
        fi
    done
}

# Función para verificar si un directorio está vacío
isEmptyDirectory() {
    local dir="$1"
    if [ "$(ls -A "$dir")" ]; then
        return 1 # No está vacío
    else
        return 0 # Está vacío
    fi
}

# Directorio raíz donde se buscarán las carpetas vacías
root_dir="./src"

# Iniciar el recorrido desde el directorio raíz
traverse_directory "$root_dir"

