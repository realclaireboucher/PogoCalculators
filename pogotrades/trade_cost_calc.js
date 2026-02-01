<!DOCTYPE html>
<html>
<head>
    <title>Trade Cost Calculator</title>
    <style>
        .container {
            margin: 20px;
            padding: 20px;
        }
        .form-group {
            margin-bottom: 15px;
        }
        select, input {
            width: 200px;
            padding: 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="form-group">
            <label for="item1">Item to Give:</label>
            <select id="item1"></select>
        </div>
        <div class="form-group">
            <label for="item2">Item to Receive:</label>
            <select id="item2"></select>
        </div>
        <div class="form-group">
            <label for="friendship">Friendship Level:</label>
            <select id="friendship">
                <option value="1.0">Stranger (No Discount)</option>
                <option value="0.9">Acquaintance (10% Off)</option>
                <option value="0.75">Friend (25% Off)</option>
                <option value="0.5">Best Friend (50% Off)</option>
            </select>
        </div>
        <button onclick="calculateTrade()">Calculate Trade Cost</button>
        <div id="result" style="margin-top: 20px;"></div>
    </div>

    <script>
        // Sample items data (replace with your static file)
        const items = [
            { id: 1, name: "Item 1", value: 100 },
            { id: 2, name: "Item 2", value: 200 },
            { id: 3, name: "Item 3", value: 300 }
        ];

        // Populate dropdowns
        function populateDropdowns() {
            const dropdown1 = document.getElementById('item1');
            const dropdown2 = document.getElementById('item2');
            
            items.forEach(item => {
                const option1 = new Option(item.name, item.id);
                const option2 = new Option(item.name, item.id);
                dropdown1.add(option1);
                dropdown2.add(option2);
            });
        }

        // Calculate trade cost
        function calculateTrade() {
            const item1Value = items.find(item => item.id == document.getElementById('item1').value).value;
            const item2Value = items.find(item => item.id == document.getElementById('item2').value).value;
            const friendshipMultiplier = parseFloat(document.getElementById('friendship').value);

            // You can add your business logic here
            const tradeCost = (item2Value - item1Value) * friendshipMultiplier;

            document.getElementById('result').innerHTML = `
                Trade Cost: ${tradeCost} coins
                (Friendship discount applied)
            `;
        }

        // Initialize dropdowns when page loads
        window.onload = populateDropdowns;
    </script>
</body>
</html>

    
