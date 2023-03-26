function navToJobDetails(){
    var islogged = localStorage.getItem("islogged");
    if(islogged == 'true') {
        window.location = 'job_listing.html?l=true';
    } else{
        window.location = 'job_listing.html?l=false';
    }
}

function autoApply(){
    if (localStorage.getItem('isAutoApplying') == 'false') {
        localStorage.setItem('isAutoApplying', true);
    }
    testSleep();

}

const sleep = async (milliseconds) => {
    await new Promise(resolve => {
        return setTimeout(resolve, milliseconds)
    });
};

const testSleep = async () => {
    document.getElementById("applying").style.display = "inline-block";
    document.getElementById("autoApply").style.display = "none";
    var storedHyperlinkInnerHTMLList = JSON.parse(localStorage.getItem("hyperlinkInnerHTMLList"));
    if(storedHyperlinkInnerHTMLList[2] == "Full Time") {
        window.location.href = "job_details.html?l=true&apply=true";
        await sleep(15000);
    }
    else if(storedHyperlinkInnerHTMLList[3] == "Full Time") {
        await sleep(10000);
        window.location.href = "job_details_elisa.html?l=true&apply=true"; 
        await sleep(15000);
    }
    else if(storedHyperlinkInnerHTMLList[4] == "Full Time") {
        await sleep(10000);
        window.location.href = "job_details_rostele.html?l=true&apply=true"; 
        await sleep(15000);
    }
    else if(storedHyperlinkInnerHTMLList[5] == "Full Time") {
        await sleep(10000);
        window.location.href = "job_details_volia.html?l=true&apply=true"; 
        await sleep(15000);
    }
    else if(storedHyperlinkInnerHTMLList[6] == "Full Time") {
        await sleep(10000);
        window.location.href = "job_details_ziggo2.html?l=true&apply=true"; 
        await sleep(15000);
    }
    else if(storedHyperlinkInnerHTMLList[7] == "Full Time") {
        await sleep(10000);
        window.location.href = "job_details_rostele2.html?l=true&apply=true"; 
        await sleep(15000);
    }
    else if(storedHyperlinkInnerHTMLList[8] == "Full Time") {
        await sleep(10000);
        window.location.href = "job_details_volia2.html?l=true&apply=true"; 
        await sleep(15000);
    }
}

async function applyNowJob(jobIndex) {
    document.getElementById("applyNow").innerHTML = 'Applying!';
    document.getElementById("preloader-apply").style.display="block";
    await sleep(5000);
    document.getElementById("preloader-apply").style.display="none";
    document.getElementById("applyNow").innerHTML = 'Applied!';
    var storedHyperlinkInnerHTMLList = JSON.parse(localStorage.getItem("hyperlinkInnerHTMLList"));
    console.log(storedHyperlinkInnerHTMLList); // Check the contents of the stored array
    storedHyperlinkInnerHTMLList[jobIndex] = "Applied!";
    localStorage.setItem("hyperlinkInnerHTMLList", JSON.stringify(storedHyperlinkInnerHTMLList));
    document.getElementById("applyNow").innerHTML = 'Applied!';


    var innerHTMLs = JSON.parse(sessionStorage.getItem('myLinksInnerHTML'));
    innerHTMLs[jobIndex] = "Applied!";
    sessionStorage.setItem('myLinksInnerHTML', JSON.stringify(innerHTMLs));
    console.log(innerHTMLs);
    await sleep(5000);
    window.location.href = "job_listing.html?l=true"; 
    
}

function getLatestHyperlink(){
    var storedHyperlinkInnerHTMLList = JSON.parse(localStorage.getItem("hyperlinkInnerHTMLList"));
    document.getElementById("market-1").innerHTML=storedHyperlinkInnerHTMLList[2];
    document.getElementById("market-2").innerHTML=storedHyperlinkInnerHTMLList[3];
    document.getElementById("market-3").innerHTML=storedHyperlinkInnerHTMLList[4];
    document.getElementById("market-4").innerHTML=storedHyperlinkInnerHTMLList[5];
    document.getElementById("market-5").innerHTML=storedHyperlinkInnerHTMLList[6];
    document.getElementById("market-6").innerHTML=storedHyperlinkInnerHTMLList[7];
    document.getElementById("market-7").innerHTML=storedHyperlinkInnerHTMLList[8];

    if(storedHyperlinkInnerHTMLList[2] == "Applied!" && storedHyperlinkInnerHTMLList[3] == "Applied!" &&
    storedHyperlinkInnerHTMLList[4] == "Applied!" && storedHyperlinkInnerHTMLList[5] == "Applied!" &&
    storedHyperlinkInnerHTMLList[6] == "Applied!" && storedHyperlinkInnerHTMLList[7] == "Applied!" &&
    storedHyperlinkInnerHTMLList[8] == "Applied!") {
        document.getElementById("applying").style.display = "none";
        document.getElementById("applied").style.display = "inline-block";
        var d = new Date,
            dformat = [d.getMonth()+1,
                d.getDate(),
                d.getFullYear()].join('/')+' '+
                [d.getHours(),
                d.getMinutes(),
                d.getSeconds()
            ].join(':');
        d = new Date(d.getTime() - 150000), dformat = [d.getMonth()+1, d.getDate(), d.getFullYear()].join('/')+' '+ [d.getHours(), d.getMinutes(), d.getSeconds()].join(':');
        const data = [
        ['TimeStamp', 'Job Title', 'Company', 'Job Apply Attempted', 'Job Applied']
        ];
        data.push([d, 'Digital Markeker', 'Ziggo', 'Yes', 'Yes']);
        d = new Date(d.getTime() + 40000), dformat = [d.getMonth()+1, d.getDate(), d.getFullYear()].join('/')+' '+ [d.getHours(), d.getMinutes(), d.getSeconds()].join(':');
        data.push([d, 'Digital Marketing Specialist', 'Elisa', 'Yes', 'Yes']);
        d = new Date(d.getTime() + 40000), dformat = [d.getMonth()+1, d.getDate(), d.getFullYear()].join('/')+' '+ [d.getHours(), d.getMinutes(), d.getSeconds()].join(':');
        data.push([d, 'Digital Marketing Executive', 'RosteleCom', 'Yes', 'Yes']);
        d = new Date(d.getTime() + 40000), dformat = [d.getMonth()+1, d.getDate(), d.getFullYear()].join('/')+' '+ [d.getHours(), d.getMinutes(), d.getSeconds()].join(':');
        data.push([d, 'Marketing Content Product Owner', 'Veolia', 'Yes', 'Yes']);
        d = new Date(d.getTime() + 40000), dformat = [d.getMonth()+1, d.getDate(), d.getFullYear()].join('/')+' '+ [d.getHours(), d.getMinutes(), d.getSeconds()].join(':');
        data.push([d, 'Digital Analyst', 'Ziggo', 'Yes', 'Yes']);
        d = new Date(d.getTime() + 40000), dformat = [d.getMonth()+1, d.getDate(), d.getFullYear()].join('/')+' '+ [d.getHours(), d.getMinutes(), d.getSeconds()].join(':');
        data.push([d, 'Digital Marketing Manager / Head of Digital', 'RsoteleCom', 'Yes', 'Yes']);
        d = new Date(d.getTime() + 40000), dformat = [d.getMonth()+1, d.getDate(), d.getFullYear()].join('/')+' '+ [d.getHours(), d.getMinutes(), d.getSeconds()].join(':');
        data.push([d, 'Digital Marketing Manager', 'Veoloa', 'Yes', 'Yes']);

        // Convert the data to a CSV string
        const csvString = data.map(row => row.join(',')).join('\n');

        // Create a new Blob object with the CSV string and set the MIME type
        const blob = new Blob([csvString], { type: 'text/csv' });

        // Create a new URL object with the Blob and get the URL string
        const url = URL.createObjectURL(blob);

        // Create a new download link and click it to download the CSV file
        const link = document.createElement('a');
        link.href = url;
        link.download = 'example.csv';
        link.click();
        hyperlinkInnerHTMLList = ['Auto Apply', 'Applying!', 'Full Time', 'Full Time', 'Full Time', 'Full Time', 'Full Time', 'Full Time', 'Full Time', '<i class="ti-arrow-up"></i>'];
        localStorage.setItem("hyperlinkInnerHTMLList", JSON.stringify(hyperlinkInnerHTMLList));
        localStorage.setItem('isAutoApplying', false);
    }
}


