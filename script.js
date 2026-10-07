/* ==========================================
   HNX26PSI04
   REAL-TIME FINANCIAL FRAUD INTELLIGENCE
   ========================================== */


/* TRANSACTION DATA */

const transactions = [

    {
        id: "T1001",
        account: "A101",
        amount: 850,
        merchant: "Store-A",
        risk: 12,
        reason: "Normal spending behavior"
    },

    {
        id: "T1002",
        account: "A102",
        amount: 1250,
        merchant: "Store-B",
        risk: 31,
        reason: "Slightly unusual transaction time"
    },

    {
        id: "T1003",
        account: "A103",
        amount: 4820,
        merchant: "Store-X",
        risk: 88,
        reason: "Unusual item + suspicious network"
    },

    {
        id: "T1004",
        account: "A104",
        amount: 5210,
        merchant: "Store-X",
        risk: 91,
        reason: "Connected to suspected fraud ring"
    },

    {
        id: "T1005",
        account: "A105",
        amount: 4950,
        merchant: "Store-X",
        risk: 86,
        reason: "Same item purchased by multiple accounts"
    },

    {
        id: "T1006",
        account: "A106",
        amount: 720,
        merchant: "Store-C",
        risk: 18,
        reason: "Consistent with account history"
    },

    {
        id: "T1007",
        account: "A107",
        amount: 6300,
        merchant: "Store-X",
        risk: 94,
        reason: "Common destination + unusual sequence"
    },

    {
        id: "T1008",
        account: "A108",
        amount: 950,
        merchant: "Store-D",
        risk: 24,
        reason: "Normal merchant behavior"
    },

    {
        id: "T1009",
        account: "A109",
        amount: 5100,
        merchant: "Store-X",
        risk: 89,
        reason: "Strong graph connection to suspicious accounts"
    },

    {
        id: "T1010",
        account: "A110",
        amount: 1500,
        merchant: "Store-B",
        risk: 35,
        reason: "New merchant but low network risk"
    }

];


/* ACCOUNT DATA */

const accounts = [

    {
        id: "A101",
        risk: 15,
        status: "Normal",
        reason: "Stable historical behavior"
    },

    {
        id: "A102",
        risk: 32,
        status: "Watch",
        reason: "Unusual transaction timing"
    },

    {
        id: "A103",
        risk: 87,
        status: "Suspicious",
        reason: "Connected to fraud cluster"
    },

    {
        id: "A104",
        risk: 94,
        status: "High Risk",
        reason: "Common destination and item sequence"
    },

    {
        id: "A105",
        risk: 91,
        status: "High Risk",
        reason: "Coordinated purchase behavior"
    },

    {
        id: "A106",
        risk: 18,
        status: "Normal",
        reason: "Matches historical spending"
    },

    {
        id: "A107",
        risk: 96,
        status: "High Risk",
        reason: "Strong fraud-ring connectivity"
    },

    {
        id: "A108",
        risk: 20,
        status: "Normal",
        reason: "Normal merchant behavior"
    }

];


/* LOAD TRANSACTIONS */

function loadTransactions() {

    const table =
        document.getElementById("transactionTable");

    table.innerHTML = "";

    transactions.forEach(transaction => {

        let riskClass = "low";

        if (transaction.risk >= 70) {
            riskClass = "high";
        }
        else if (transaction.risk >= 40) {
            riskClass = "medium";
        }

        table.innerHTML += `

            <tr>

                <td>${transaction.id}</td>

                <td>${transaction.account}</td>

                <td>₹${transaction.amount.toLocaleString()}</td>

                <td>${transaction.merchant}</td>

                <td class="risk ${riskClass}">
                    ${transaction.risk}/100
                </td>

                <td>${transaction.reason}</td>

            </tr>

        `;

    });
}


/* LOAD ACCOUNTS */

function loadAccounts() {

    const container =
        document.getElementById("accountGrid");

    container.innerHTML = "";

    accounts.forEach(account => {

        let riskClass = "low";

        if (account.risk >= 70) {
            riskClass = "high";
        }
        else if (account.risk >= 40) {
            riskClass = "medium";
        }

        container.innerHTML += `

            <div class="account-card">

                <h3>${account.id}</h3>

                <div class="account-risk ${riskClass}">
                    ${account.risk}/100
                </div>

                <strong>${account.status}</strong>

                <p>
                    ${account.reason}
                </p>

            </div>

        `;

    });
}


/* STATISTICS */

function loadStatistics() {

    document.getElementById(
        "totalTransactions"
    ).textContent = transactions.length;

    const highRisk =
        transactions.filter(
            t => t.risk >= 70
        ).length;

    document.getElementById(
        "highRisk"
    ).textContent = highRisk;

    document.getElementById(
        "fraudRings"
    ).textContent = "1";
}


/* RISK CHART */

function createRiskChart() {

    const low =
        transactions.filter(t => t.risk < 40).length;

    const medium =
        transactions.filter(
            t => t.risk >= 40 && t.risk < 70
        ).length;

    const high =
        transactions.filter(t => t.risk >= 70).length;


    new Chart(
        document.getElementById("riskChart"),
        {
            type: "doughnut",

            data: {

                labels: [
                    "Low Risk",
                    "Medium Risk",
                    "High Risk"
                ],

                datasets: [{
                    data: [
                        low,
                        medium,
                        high
                    ]
                }]

            },

            options: {
                responsive: true
            }

        }
    );

}


/* RISK FACTOR CHART */

function createFactorChart() {

    new Chart(
        document.getElementById("factorChart"),
        {

            type: "bar",

            data: {

                labels: [
                    "Amount",
                    "Time",
                    "Merchant",
                    "Behavior",
                    "Network"
                ],

                datasets: [{
                    label: "Contribution %",
                    data: [
                        18,
                        12,
                        17,
                        23,
                        30
                    ]
                }]

            },

            options: {

                responsive: true,

                scales: {
                    y: {
                        beginAtZero: true,
                        max: 40
                    }
                }

            }

        }
    );

}


/* AI DETECTION */

function runDetection() {

    const button =
        document.querySelector(".hero button");

    button.textContent =
        "Analyzing...";

    button.disabled = true;


    setTimeout(() => {

        button.textContent =
            "✓ Detection Complete";

        button.disabled = false;

        alert(
            "AI Detection Complete!\n\n" +
            "1 Fraud Ring Detected\n" +
            "5 High-Risk Accounts Found\n" +
            "6 High-Risk Transactions Found\n\n" +
            "Recommended Action:\n" +
            "Hold and manually review suspicious transactions."
        );

    }, 1500);

}


/* REVIEW ALERT */

function reviewAlert() {

    alert(

        "🚨 FRAUD ALERT\n\n" +

        "Fraud Ring #01\n\n" +

        "Accounts: A103, A104, A105, A107, A109\n\n" +

        "Pattern:\n" +

        "• Same unusual item\n" +

        "• Similar purchase sequence\n" +

        "• Similar transaction timing\n" +

        "• Common destination\n" +

        "• Strong network connectivity\n\n" +

        "Recommended Action:\n" +

        "HOLD + MANUAL REVIEW"

    );

}


/* START DASHBOARD */

document.addEventListener(
    "DOMContentLoaded",
    function () {

        loadTransactions();

        loadAccounts();

        loadStatistics();

        createRiskChart();

        createFactorChart();

    }
);