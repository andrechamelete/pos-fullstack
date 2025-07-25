package com.simpleapi.simplesapi.service;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.simpleapi.simplesapi.model.Estudante;

@Service
public class EstudanteService {
    
    private static Map<Long, Estudante> listaEstudantes = new HashMap<>();

    public ResponseEntity<Estudante> buscarEstudantePorId(Long id) {
        Estudante estudante =  listaEstudantes.get(id);
        if (estudante == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }

        return ResponseEntity.status(HttpStatus.OK).body(estudante);
    }

    public List<Estudante> buscarTodosEstudantes() {
        return new ArrayList<>(listaEstudantes.values());
    }

    public ResponseEntity<Estudante> cadastrarEstudante(Estudante estudante) {
        listaEstudantes.put(estudante.getId(), estudante);

        return ResponseEntity.status(HttpStatus.OK).body(estudante);
    }

    public ResponseEntity<Estudante> atualizarEstudante(Estudante estudante) {
        Estudante estudanteEncontrado = listaEstudantes.get(estudante.getId());
        if (estudanteEncontrado == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        listaEstudantes.put(estudante.getId(), estudante);
        return ResponseEntity.status(HttpStatus.OK).body(estudanteEncontrado);

    }

    public ResponseEntity<String> deletarEstudante(Long id) {
        Estudante estudanteEncontrado = listaEstudantes.get(id);
        if (estudanteEncontrado == null) {
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body(null);
        }
        listaEstudantes.remove(id);
        return ResponseEntity.status(HttpStatus.OK).body("Estudante deletado com sucesso!");
    }
}
