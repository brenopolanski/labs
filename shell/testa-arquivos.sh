#!/bin/bash
# testa-arquivos - script que pede ao usuário para digitar um arquivo e testa
# se este arquivo existe. Se sim, diz se é um arquivo ou um diretório.
# Autor: Breno Polanski

echo "Digite o arquivo:"
read ARQUIVO

test -f "$ARQUIVO" && echo "$ARQUIVO é um arquivo" || echo "O arquivo $ARQUIVO não foi encontrado"

