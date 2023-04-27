const employee = {
    name: 'Sam',
}
const employee1= {...employee}
function updateEmployeeWithKeyAndValue(){
    employee1.streetAddress = '11 Broadway'
    return employee1
}

function destructivelyUpdateEmployeeWithKeyAndValue(){
     employee.streetAddress='12 Broadway'
     return employee
}
function deleteFromEmployeeByKey(){
    delete employee1.name
    return employee1
}

function destructivelyDeleteFromEmployeeByKey(){
    delete employee.name
    employee.streetAddress= '12 Broadway'
    return employee
}