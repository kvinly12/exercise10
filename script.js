fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const tableBody = document.querySelector('#companyTable tbody');
        data.forEach(company => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${company.company_name}</td>
                <td>${company.about}</td>
                <td><img src="${company.img_src}" alt="${company.company_name} Logo"></td>
            `;
            tableBody.appendChild(row);
        });
    })
    .catch(error => console.error('Error:', error));
