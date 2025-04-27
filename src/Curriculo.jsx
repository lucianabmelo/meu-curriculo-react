import React from "react";
import "./App.css"; // Vamos criar esse CSS também

export default function Curriculo() {
  return (
    <div className="container">
      <div className="card">
        <h1>Luciana Moura Borba de Melo</h1>
        <p>Estrada do Arraial, 2385, Tamarineira - Recife, PE - 52.051-380</p>
        <p>Telefone: (81) 99784-1611 | Email: lumbm.20@gmail.com</p>
        <p>Data de nascimento: 22/11/1993 | CNH: Categoria "B" | Solteira</p>

        <section>
          <h2>Contatos</h2>
          <p><a href="https://www.linkedin.com/in/lucianambmelo" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
          <p><a href="https://github.com/lucianabmelo" target="_blank" rel="noopener noreferrer">GitHub</a></p>
        </section>

        <section>
          <h2>Objetivo</h2>
          <p>Em busca de uma oportunidade de estágio ou emprego na área de desenvolvimento web.</p>
        </section>

        <section>
          <h2>Histórico Profissional</h2>
          <h3>Semog - Estagiária em TI</h3>
          <p><em>Recife, Pernambuco | 04/2025 - Atual</em></p>
          <ul>
            <li>Auxílio de suporte interno N1<li>
            <li>Manejo em sistemas da empresa, manutenção de hardware e demais atividades de ti<li>
          </ul>

          <h3>LCC - Secretária Administrativa</h3>
          <p><em>Recife, Pernambuco | 08/2024 - 04/2025</em></p>
          <ul>
            <li>Emissão de notas fiscais e gestão financeira.</li>
            <li>Backup eletrônico de NFe e controle de documentos.</li>
            <li>Organização de prazos, controle de estoque e suporte à equipe.</li>
            <li>Desenvolvimento de relatórios e resolução de problemas administrativos.</li>
          </ul>
        </section>

        <section>
          <h2>Formação Acadêmica</h2>
          <ul>
            <li><strong>Análise e Desenvolvimento de Sistemas</strong> - Faculdade Católica Imaculada Conceição do Recife (08/2024 - 12/2026- Cursando</li>
            <li><strong>Técnico em Informática</strong> - SENAC Recife (08/2022 - 04/2024) - Formado</li>
            <li><strong>Bacharelado em Direito</strong> - Universidade Católica de Pernambuco (08/2012 - 06/2018) - Formado</li>
          </ul>
        </section>

        <section>
          <h2>Habilidades e Competências</h2>
          <h3>Soft Skills</h3>
          <ul>
            <li>Proatividade, Adaptabilidade, Inteligência emocional, Organização, Liderança, Trabalho em equipe</li>
          </ul>

          <h3>Hard Skills</h3>
          <ul>
            <li>Informática Básica, Manutenção de hardware, Instalação de Softwares, Office Avançado</li>
            <li>Tecnologias: HTML, CSS, Python, PHP, JavaScript, Figma, Power BI</li>
          </ul>
        </section>

        <section>
          <h2>Idiomas</h2>
          <p>Inglês - B1 (Pré-intermediário)</p>
        </section>
      </div>
    </div>
  );
}
