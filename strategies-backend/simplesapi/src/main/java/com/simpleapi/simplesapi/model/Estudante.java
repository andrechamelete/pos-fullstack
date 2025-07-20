package com.simpleapi.simplesapi.model;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Estudante {
    
    private Long id;

    private String name;

    private String email;

    private LocalDate birthDate;
}
