function updateEmployeeWithKeyAndValue(employeeObject, key, value) {
    const newObj = {... employeeObject};
    newObj[key] = value;
    return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue(emp, key, value) {
    emp[key] = value;
    return emp
}

function deleteFromEmployeeByKey(emp, key) {
    const newEmployee = {... emp};
    delete newEmployee[key];
    return newEmployee

}

function destructivelyDeleteFromEmployeeByKey(emp, key) {
    delete emp[key];
    return emp;
}

const employee = {name: 'val1', streetAddress: 'val2'};
