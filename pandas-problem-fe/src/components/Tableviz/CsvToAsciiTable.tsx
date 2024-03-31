import React from 'react';

interface Props {
  csvData: string;
}

const CsvToAsciiTable: React.FC<Props> = ({ csvData }) => {
  // Split CSV data into rows
  const rows = csvData.trim().split('\n');

  // Split each row into cells
  const tableData = rows.map(row => row.trim().split(','));

  // Get maximum width for each column
  const columnWidths: number[] = Array.from({ length: tableData[0].length }, () => 0);
  tableData.forEach(row => {
    row.forEach((cell, index) => {
      if (cell.length > columnWidths[index]) {
        columnWidths[index] = cell.length;
      }
    });
  });

  // Function to pad string with spaces to center align
  const padToCenter = (value: string, width: number) => {
    const spacesToAdd = width - value.length;
    const paddingLeft = Math.floor(spacesToAdd / 2);
    const paddingRight = spacesToAdd - paddingLeft;
    return ' '.repeat(paddingLeft) + value + ' '.repeat(paddingRight);
  };

  // Render the table with ASCII border and separator
  return (
    <div style={{ padding: '0 20px' }}> {/* Add left and right padding */}
      <pre>
        {/* Render top border */}
        <div>
          {'┌' + columnWidths.map(width => '─'.repeat(width + 2)).join('┬') + '┐'}
        </div>
        {/* Render header row */}
        <div>
          {'│'}
          {tableData[0].map((header, index) => (
            <span key={index}>
              {' '}
              {padToCenter(header.trim(), columnWidths[index])}
              {' '}
              {index < tableData[0].length - 1 ? '│' : ''}
            </span>
          ))}
          {'│'}
        </div>
        {/* Render separator */}
        <div>
          {'├' + columnWidths.map(width => '─'.repeat(width + 2)).join('┼') + '┤'}
        </div>
        {/* Render table rows */}
        {tableData.slice(1).map((row, rowIndex) => (
          <div key={rowIndex}>
            {'│'}
            {row.map((cell, cellIndex) => (
              <span key={cellIndex}>
                {' '}
                {padToCenter(cell, columnWidths[cellIndex])}
                {' '}
                {cellIndex < row.length - 1 ? '│' : ''}
              </span>
            ))}
            {'│'}
            <br /> {/* Add line break after each row */}
          </div>
        ))}
        {/* Render bottom border */}
        <div>
          {'└' + columnWidths.map(width => '─'.repeat(width + 2)).join('┴') + '┘'}
        </div>
      </pre>
    </div>
  );
};

export default CsvToAsciiTable;