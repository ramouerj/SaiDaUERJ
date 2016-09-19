function Grade(materia) {
	this.materia = materia;
}

	Grade.prototype.setTurma = function(turma){
		this.turma = turma;
	}

	Grade.prototype.setHorario = function(horario){
		this.horario = horario;
	}

	Grade.prototype.setDocente = function(docente){
		this.docente = docente;
	}

	Grade.prototype.getMateria = function(){
		return this.materia;
	}

	Grade.prototype.getTurma = function(){
		return this.turma;
	}
	Grade.prototype.getHorario = function(){
		return this.horario;
	}

	Grade.prototype.getDocente = function(){
		return this.docente;
	}
