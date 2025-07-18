document.addEventListener('DOMContentLoaded', () => {
  
    let userName = prompt("Halo nama kamu siapa?");
    if (userName) {
        alert("Assalamualaikum " + userName + "\nالسلام عليكم");
    } else {
        alert("Assalamualaikum\nالسلام عليكم");
    }


    const form = document.querySelector('.feedback-form');
    if (form) {
        
        let displayArea = document.createElement('div');
        displayArea.style.border = "1px solid #ccc";
        displayArea.style.padding = "10px";
        displayArea.style.marginTop = "10px";
        displayArea.style.fontSize = "14px";
        form.parentNode.insertBefore(displayArea, form.nextSibling);

        
        function updateDisplay() {
            const name = form.querySelector('input[type="text"]').value;
            const age = form.querySelector('input[type="number"]').value;
            const gender = form.querySelector('select').value;
            const education = form.querySelectorAll('input[type="text"]')[1].value; 
            const email = form.querySelectorAll('input[type="text"]')[2].value; 
            const message = form.querySelector('textarea').value;

            displayArea.innerHTML = `
                <strong>Preview Input Values:</strong><br>
                Nama kamu: ${name || '-'}<br>
                Usia kamu: ${age || '-'}<br>
                Kelamin: ${gender || '-'}<br>
                Pendidikan terakhir: ${education || '-'}<br>
                Alamat email: ${email || '-'}<br>
                Pesan: ${message || '-'}
            `;
        }

       
        form.querySelectorAll('input, select, textarea').forEach(input => {
            input.addEventListener('input', updateDisplay);
        });

      
        updateDisplay();

       
        form.addEventListener('submit', (e) => {
            e.preventDefault();

            const name = form.querySelector('input[type="text"]').value;
            const age = form.querySelector('input[type="number"]').value;
            const gender = form.querySelector('select').value;
            const education = form.querySelectorAll('input[type="text"]')[1].value;
            const email = form.querySelectorAll('input[type="text"]')[2].value;
            const message = form.querySelector('textarea').value;

            alert(
                `Hasil Input:\n` +
                `Nama kamu: ${name || '-'}\n` +
                `Usia kamu: ${age || '-'}\n` +
                `Kelamin: ${gender || '-'}\n` +
                `Pendidikan terakhir: ${education || '-'}\n` +
                `Alamat email: ${email || '-'}\n` +
                `Pesan: ${message || '-'}`
            );
        });
    }

    
    const clock = document.getElementById('clock');
    if (clock) {
        function updateClock() {
            const now = new Date();
            const daysOfWeek = ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'];
            const dayName = daysOfWeek[now.getDay()];
            const date = now.getDate().toString().padStart(2, '0');
            const month = (now.getMonth() + 1).toString().padStart(2, '0');
            const year = now.getFullYear();
            const hours = now.getHours().toString().padStart(2, '0');
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const seconds = now.getSeconds().toString().padStart(2, '0');
            clock.textContent = `${dayName}, ${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
        }
        updateClock();
        setInterval(updateClock, 1000);
    }

    
    const proyekSekolahLink = document.querySelector('a[href="https://firdaussubhan2006.wixsite.com/my-site"]');
    const portofolioLink = document.querySelector('a[href="https://firdaussubhan2006.wixsite.com/my-site/about-9"]');

    if (proyekSekolahLink) {
        proyekSekolahLink.addEventListener('click', (e) => {
            e.preventDefault();
            alert("Ini adalah proyek yang dibuat sebagai ujian praktek semasa SMA");
            window.location.href = proyekSekolahLink.href;
        });
    }

    if (portofolioLink) {
        portofolioLink.addEventListener('click', (e) => {
            e.preventDefault();
            alert("Ini adalah proyek yang dibuat sebagai ujian praktek semasa SMA");
            window.location.href = portofolioLink.href;
        });
    }
});
