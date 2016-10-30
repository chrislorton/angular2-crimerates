System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var ListService;
    return {
        setters:[],
        execute: function() {
            ListService = (function () {
                function ListService() {
                }
                ListService.prototype.getData = function () {
                    return [
                        { "id": "0", "Class": "Alabama", "State": "Alabama", "Murder": "13.2", "Assault": "236", "UrbanPop": "58", "Rape": "21.2" },
                        { "id": "1", "Class": "Alaska", "State": "Alaska", "Murder": "10", "Assault": "263", "UrbanPop": "48", "Rape": "44.5" },
                        { "id": "2", "Class": "Arizona", "State": "Arizona", "Murder": "8.1", "Assault": "294", "UrbanPop": "80", "Rape": "31" },
                        { "id": "3", "Class": "Arkansas", "State": "Arkansas", "Murder": "8.8", "Assault": "190", "UrbanPop": "50", "Rape": "19.5" },
                        { "id": "4", "Class": "California", "State": "California", "Murder": "9", "Assault": "276", "UrbanPop": "91", "Rape": "40.6" },
                        { "id": "5", "Class": "Colorado", "State": "Colorado", "Murder": "7.9", "Assault": "204", "UrbanPop": "78", "Rape": "38.7" },
                        { "id": "6", "Class": "Connecticut", "State": "Connecticut", "Murder": "3.3", "Assault": "110", "UrbanPop": "77", "Rape": "11.1" },
                        { "id": "7", "Class": "Delaware", "State": "Delaware", "Murder": "5.9", "Assault": "238", "UrbanPop": "72", "Rape": "15.8" },
                        { "id": "8", "Class": "Florida", "State": "Florida", "Murder": "15.4", "Assault": "335", "UrbanPop": "80", "Rape": "31.9" },
                        { "id": "9", "Class": "Georgia", "State": "Georgia", "Murder": "17.4", "Assault": "211", "UrbanPop": "60", "Rape": "25.8" },
                        { "id": "10", "Class": "Hawaii", "State": "Hawaii", "Murder": "5.3", "Assault": "46", "UrbanPop": "83", "Rape": "20.2" },
                        { "id": "11", "Class": "Idaho", "State": "Idaho", "Murder": "2.6", "Assault": "120", "UrbanPop": "54", "Rape": "14.2" },
                        { "id": "12", "Class": "Illinois", "State": "Illinois", "Murder": "10.4", "Assault": "249", "UrbanPop": "83", "Rape": "24" },
                        { "id": "13", "Class": "Indiana", "State": "Indiana", "Murder": "7.2", "Assault": "113", "UrbanPop": "65", "Rape": "21" },
                        { "id": "14", "Class": "Iowa", "State": "Iowa", "Murder": "2.2", "Assault": "56", "UrbanPop": "57", "Rape": "11.3" },
                        { "id": "15", "Class": "Kansas", "State": "Kansas", "Murder": "6", "Assault": "115", "UrbanPop": "66", "Rape": "18" },
                        { "id": "16", "Class": "Kentucky", "State": "Kentucky", "Murder": "9.7", "Assault": "109", "UrbanPop": "52", "Rape": "16.3" },
                        { "id": "17", "Class": "Louisiana", "State": "Louisiana", "Murder": "15.4", "Assault": "249", "UrbanPop": "66", "Rape": "22.2" },
                        { "id": "18", "Class": "Maine", "State": "Maine", "Murder": "2.1", "Assault": "83", "UrbanPop": "51", "Rape": "7.8" },
                        { "id": "19", "Class": "Maryland", "State": "Maryland", "Murder": "11.3", "Assault": "300", "UrbanPop": "67", "Rape": "27.8" },
                        { "id": "20", "Class": "Massachusetts", "State": "Massachusetts", "Murder": "4.4", "Assault": "149", "UrbanPop": "85", "Rape": "16.3" },
                        { "id": "21", "Class": "Michigan", "State": "Michigan", "Murder": "12.1", "Assault": "255", "UrbanPop": "74", "Rape": "35.1" },
                        { "id": "22", "Class": "Minnesota", "State": "Minnesota", "Murder": "2.7", "Assault": "72", "UrbanPop": "66", "Rape": "14.9" },
                        { "id": "23", "Class": "Mississippi", "State": "Mississippi", "Murder": "16.1", "Assault": "259", "UrbanPop": "44", "Rape": "17.1" },
                        { "id": "24", "Class": "Missouri", "State": "Missouri", "Murder": "9", "Assault": "178", "UrbanPop": "70", "Rape": "28.2" },
                        { "id": "25", "Class": "Montana", "State": "Montana", "Murder": "6", "Assault": "109", "UrbanPop": "53", "Rape": "16.4" },
                        { "id": "26", "Class": "Nebraska", "State": "Nebraska", "Murder": "4.3", "Assault": "102", "UrbanPop": "62", "Rape": "16.5" },
                        { "id": "27", "Class": "Nevada", "State": "Nevada", "Murder": "12.2", "Assault": "252", "UrbanPop": "81", "Rape": "46" },
                        { "id": "28", "Class": "NewHampshire", "State": "New Hampshire", "Murder": "2.1", "Assault": "57", "UrbanPop": "56", "Rape": "9.5" },
                        { "id": "29", "Class": "NewJersey", "State": "New Jersey", "Murder": "7.4", "Assault": "159", "UrbanPop": "89", "Rape": "18.8" },
                        { "id": "30", "Class": "NewMexico", "State": "New Mexico", "Murder": "11.4", "Assault": "285", "UrbanPop": "70", "Rape": "32.1" },
                        { "id": "31", "Class": "NewYork", "State": "New York", "Murder": "11.1", "Assault": "254", "UrbanPop": "86", "Rape": "26.1" },
                        { "id": "32", "Class": "NorthCarolina", "State": "North Carolina", "Murder": "13", "Assault": "337", "UrbanPop": "45", "Rape": "16.1" },
                        { "id": "33", "Class": "NorthDakota", "State": "North Dakota", "Murder": "0.8", "Assault": "45", "UrbanPop": "44", "Rape": "7.3" },
                        { "id": "34", "Class": "Ohio", "State": "Ohio", "Murder": "7.3", "Assault": "120", "UrbanPop": "75", "Rape": "21.4" },
                        { "id": "35", "Class": "Oklahoma", "State": "Oklahoma", "Murder": "6.6", "Assault": "151", "UrbanPop": "68", "Rape": "20" },
                        { "id": "36", "Class": "Oregon", "State": "Oregon", "Murder": "4.9", "Assault": "159", "UrbanPop": "67", "Rape": "29.3" },
                        { "id": "37", "Class": "Pennsylvania", "State": "Pennsylvania", "Murder": "6.3", "Assault": "106", "UrbanPop": "72", "Rape": "14.9" },
                        { "id": "38", "Class": "RhodeIsland", "State": "Rhode Island", "Murder": "3.4", "Assault": "174", "UrbanPop": "87", "Rape": "8.3" },
                        { "id": "39", "Class": "SouthCarolina", "State": "South Carolina", "Murder": "14.4", "Assault": "279", "UrbanPop": "48", "Rape": "22.5" },
                        { "id": "40", "Class": "SouthDakota", "State": "South Dakota", "Murder": "3.8", "Assault": "86", "UrbanPop": "45", "Rape": "12.8" },
                        { "id": "41", "Class": "Tennessee", "State": "Tennessee", "Murder": "13.2", "Assault": "188", "UrbanPop": "59", "Rape": "26.9" },
                        { "id": "42", "Class": "Texas", "State": "Texas", "Murder": "12.7", "Assault": "201", "UrbanPop": "80", "Rape": "25.5" },
                        { "id": "43", "Class": "Utah", "State": "Utah", "Murder": "3.2", "Assault": "120", "UrbanPop": "80", "Rape": "22.9" },
                        { "id": "44", "Class": "Vermont", "State": "Vermont", "Murder": "2.2", "Assault": "48", "UrbanPop": "32", "Rape": "11.2" },
                        { "id": "45", "Class": "Virginia", "State": "Virginia", "Murder": "8.5", "Assault": "156", "UrbanPop": "63", "Rape": "20.7" },
                        { "id": "46", "Class": "Washington", "State": "Washington", "Murder": "4", "Assault": "145", "UrbanPop": "73", "Rape": "26.2" },
                        { "id": "47", "Class": "WestVirginia", "State": "West Virginia", "Murder": "5.7", "Assault": "81", "UrbanPop": "39", "Rape": "9.3" },
                        { "id": "48", "Class": "Wisconsin", "State": "Wisconsin", "Murder": "2.6", "Assault": "53", "UrbanPop": "66", "Rape": "10.8" },
                        { "id": "49", "Class": "Wyoming", "State": "Wyoming", "Murder": "6.8", "Assault": "161", "UrbanPop": "60", "Rape": "15.6" }
                    ];
                };
                return ListService;
            }());
            exports_1("ListService", ListService);
        }
    }
});
//# sourceMappingURL=list.service.js.map