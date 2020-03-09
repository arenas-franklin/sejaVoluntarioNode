
const validateField = (field, message) => {
    if (!field.value && field.value.trim() == "") {
        alert(message)
        return false
    }
    return true
}


const validateNotice = (form) => {
    return validateField(form.email, "Email deve ser informado.") &&
        validateField(form.descricao, "Descrição deve ser informada.") &&
        validateField(form.titulo, "Titulo deve ser informado.") &&
        validateField(form.cidade, "Cidade deve ser informada.")

}

const validateSeach = (form)=>{
    return validateField(form.key, "Informe o que deseja buscar...")
}
