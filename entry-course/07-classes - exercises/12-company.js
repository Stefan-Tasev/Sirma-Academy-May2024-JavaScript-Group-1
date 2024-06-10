class Company {
    departments = {}

    addEmployee(name, salary, position, department) {

        let checkForValidProperty = function(input) {
            if (input !== '' || input !== undefined || input !== null) {
                return true;
            }
        }

        try {
            if(checkForValidProperty(name)
                && checkForValidProperty(salary)
                && checkForValidProperty(position)
                && checkForValidProperty(department)
                && salary > 0) {

                    if (!this.departments[department]) {
                        this.departments[department] = []
                    }

                    this.departments[department].push({
                            name: name,
                            salary: Number(salary),
                            position: position,
                    })
                } else {
                    throw error;
                }
        } catch(error) {
            console.error('Invalid input!');
        }
        
    }

    bestDepartment() {
        let bestAverageSalary = 0;
        let departmentBest = ''

        for (let key of Object.keys(this.departments)) {

            let current = 0;
            let count = 0;

            for (let employee of this.departments[key]) {
                current += Number(employee.salary);
                count++;
            }

            let currentAverage = current / count;
            if (currentAverage > bestAverageSalary) {
                bestAverageSalary = currentAverage;
                departmentBest = key
            }
        }

        let result = `Best Department is: ${departmentBest}\nAverage salary: ${bestAverageSalary.toFixed(2)}`;

        let sortedDepartment = this.departments[departmentBest].sort((a, b) => b.salary - a.salary || b.name.localeCompare(a.name, 'en', { sensitivity: 'base' }))
        
        for (let employee of sortedDepartment) {
            result += `\n${employee.name} ${employee.salary} ${employee.position}`
        }
        return result;
    }
}

let c = new Company();
c.addEmployee("Stamat", 2000, "engineer", "Construction");
c.addEmployee("Peter", 1500, "electrical engineer", "Construction");
c.addEmployee("Martin", 500, "support", "Construction");
c.addEmployee("Stanley", 2000, "architect", "Construction");
c.addEmployee("Stamat", 1200, "digital marketing manager", "Marketing");
c.addEmployee("Peter", 1000, "graphical designer", "Marketing");
c.addEmployee("George", 1350, "HR", "Human resources");
c.addEmployee("George", 0, "HR", "Human resources");
c.addEmployee("", 0, "HR", "Human resources");
c.addEmployee("", 0, null, "Human resources");
c.addEmployee("", 0, "HR", undefined);
console.log(c.bestDepartment());
//console.log(c.departments)
