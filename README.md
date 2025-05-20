# Core Function: #

The primary function of this React application is to:
1) Read data from a CSV file.
2) Display that data in an HTML table (Table 1).
3) Process the CSV data.
3) Display the processed data in a second HTML table (Table 2) upon user interaction (button click).

# Component Interaction: #
- **Table1.jsx:** This component handles fetching and displaying the raw data from the CSV file.  It also extracts the data needed to create Table 2 and passes this raw data to the App component.
- **Table2.jsx:** This component is responsible for displaying Table 2.  It receives the raw data from the App component, processes it to get the table values, and then renders the table.  Its visibility is c 
  controlled by the App component.
- **App.jsx:** This is the main component.  It coordinates the data flow between Table1 and Table 2.  It fetches the processed data from Table1 and stores it.  It also manages the state (using useState) to control when 
  Table 2 is displayed.  The component also renders the button that triggers the display of Table 2.

# Data Flow: #
1) Table1 fetches data from Table_Input.csv.
2) Table1 displays the raw data as Table 1.
3) Table1 extracts the data required for Table 2 and passes this raw data to App.
4) App stores the raw data.
5) When the user clicks the "Display Table 2" button, App updates its state to show Table 2.
6) App passes the raw data to Table2.
7) Table2 processes the raw data and displays it as Table 2.
