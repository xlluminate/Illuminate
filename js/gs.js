        // Function to get the value of a cookie
        function getCookie(name) {
            const value = `; ${document.cookie}`;
            const parts = value.split(`; ${name}=`);
            if (parts.length === 2) return parts.pop().split(';').shift();
        }

        // Get the game server cookie value
        const gameServer = getCookie("gameserver");

        // Define the base URL for game assets
        let baseUrl;

        // Switch based on the game server cookie value
        switch (gameServer) {
            case "teacherease":
                baseUrl = "https://projectassets.teacherease.net";
                break;
            case "schoolfacts1":
                baseUrl = "https://projectassets.schoolfacts.xyz";
                break;
            // Add more cases for additional game servers if needed
            default:
                // Set a default base URL
                baseUrl = "https://projectassets.teacherease.net";
