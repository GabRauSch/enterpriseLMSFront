export const getPontuationByEmployees = (employeesList: any) =>{
    let totalPontuation = 0;
    employeesList.forEach((element: any) => {
        totalPontuation += element.pontuation
    });

    return totalPontuation
}