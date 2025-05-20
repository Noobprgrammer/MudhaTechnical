## Core Function: ##

The primary function of this React application is to:

Read data from a CSV file.

Display that data in an HTML table (Table 1).

Process the CSV data.

Display the processed data in a second HTML table (Table 2) upon user interaction (button click).

Component Interaction:

Table1.jsx: This component handles fetching and displaying the raw data from the CSV file.  It also extracts the data needed to create Table 2 and passes this raw data to the App component.

Table2.jsx: This component is responsible for displaying Table 2.  It receives the raw data from the App component, processes it to get the table values, and then renders the table.  Its visibility is controlled by the App component.

App.jsx: This is the main component.  It coordinates the data flow between Table1 and Table 2.  It fetches the processed data from Table1 and stores it.  It also manages the state (using useState) to control when Table 2 is displayed.  The component also renders the button that triggers the display of Table 2.

Data Flow:

Table1 fetches data from Table_Input.csv.

Table1 displays the raw data as Table 1.

Table1 extracts the data required for Table 2 and passes this raw data to App.

App stores the raw data.

When the user clicks the "Display Table 2" button, App updates its state to show Table 2.

App passes the raw data to Table2.

Table2 processes the raw data and displays it as Table 2.
