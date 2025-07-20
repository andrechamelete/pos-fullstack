package com.simpleapi.simplesapi.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.simpleapi.simplesapi.model.Estudante;
import com.simpleapi.simplesapi.service.EstudanteService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping("/estudante")
@AllArgsConstructor
public class EstudanteController {

    private EstudanteService estudanteService;
    
    @GetMapping("/{id}")
    public ResponseEntity<Estudante> buscarEstudantePorId(@PathVariable Long id) {
        return estudanteService.buscarEstudantePorId(id);
    }

    @GetMapping
    public List<Estudante> buscarTodosEstudantes() {
        return estudanteService.buscarTodosEstudantes();
    }

    @PostMapping
    public ResponseEntity<Estudante> cadastrarEstudante(@RequestBody Estudante estudante) {
        return estudanteService.cadastrarEstudante(estudante);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Estudante> atualizarEstudante(@PathVariable Long id, @RequestBody Estudante estudante) {
        return estudanteService.atualizarEstudante(estudante);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deletarEstudante(@PathVariable Long id) {
        return estudanteService.deletarEstudante(id);
    }
}
