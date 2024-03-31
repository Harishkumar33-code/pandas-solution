export const q1 = {
    id: "1",
    title: "Fill Missing Weight Data in SQL",
    problemStatement: `
    You are given a table weight_data with columns (date DATE, weight FLOAT), where each row represents the weight recorded on a specific date. However, there are gaps in the data where certain dates have no weight recorded. Your task is to fill in these missing weight values by replacing them with the last recorded weight before the gap.
    
    Write an SQL query to fill in the missing weight values according to the following rules:
    
    If there is no weight recorded for a date, replace it with the weight recorded on the nearest previous date where weight data is available.
    If there is no previous weight data available (i.e., the date is the earliest in the dataset), leave the weight as NULL.
    You need to provide SQL statements to achieve this task.`,

    input1: `date,weight
2024-03-01,150.5
2024-03-02,NULL
2024-03-03,NULL
2024-03-04,149.8
2024-03-05,NULL
2024-03-06,149.2`,
    output1: `date,weight 
2024-03-01,150.5 
2024-03-02,150.5 
2024-03-03,150.5
2024-03-04,149.8
2024-03-05,149.8
2024-03-06,149.2`
};
