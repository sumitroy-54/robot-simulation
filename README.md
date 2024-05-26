# Robot Simulation

This is a React-based simulation of a toy robot moving on a 5x5 square tabletop. The robot can be controlled using various commands to move around the table and report its position and direction. The robot is prevented from falling off the table.

## Features

- **PLACE X,Y,F**: Place the robot on the table at position (X, Y) facing NORTH, SOUTH, EAST, or WEST.
- **MOVE**: Move the robot one unit forward in the direction it is currently facing.
- **LEFT**: Rotate the robot 90 degrees to the left without changing its position.
- **RIGHT**: Rotate the robot 90 degrees to the right without changing its position.
- **REPORT**: Output the current position and direction of the robot.

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/sumitroy-54/robot-simulation.git
    cd robot-simulation
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the application:
    ```bash
    npm start
    ```

4. Open your browser and navigate to `http://localhost:3000`.

## Usage

Enter the commands in the text area provided and click the "Execute" button to see the robot's position and direction. The `REPORT` command will display the current state of the robot.

### Example Commands

**Test Case 1:**
PLACE 0,0,NORTH
MOVE
REPORT

**Expected Output:**
0,1,NORTH


**Test Case 2:**
PLACE 0,0,NORTH
LEFT
REPORT

**Expected Output:**
0,0,WEST


**Test Case 3:**
PLACE 1,2,EAST
MOVE
MOVE
LEFT
MOVE
REPORT

**Expected Output:**
3,3,NORTH

**Test Case 4:**
PLACE 0,0,SOUTH
MOVE
REPORT

**Expected Output:**
0,0,SOUTH

**Test Case 5:**
PLACE 4,4,EAST
MOVE
REPORT

**Expected Output:**
4,4,EAST

**Test Case 6:**
PLACE 2,2,NORTH
RIGHT
MOVE
RIGHT
MOVE
REPORT

**Expected Output:**
3,1,SOUTH

**Test Case 7:**
PLACE 0,0,NORTH
MOVE
MOVE
RIGHT
MOVE
REPORT

**Expected Output:**
1,2,EAST

**Test Case 8:**
PLACE 1,1,EAST
MOVE
MOVE
MOVE
MOVE
REPORT

**Expected Output:**
4,1,EAST

**Test Case 9:**
PLACE 0,0,NORTH
LEFT
LEFT
MOVE
MOVE
REPORT

**Expected Output:**
0,0,SOUTH

**Test Case 10:**
PLACE 0,0,NORTH
PLACE 3,3,WEST
MOVE
MOVE
REPORT

**Expected Output:**
1,3,WEST


## Implementation Details

The application consists of a single `Robot` component that maintains the robot's state and processes the commands. Here are some key aspects:

- **State Management**: The robot's position and direction are managed using React's `useState` hook.
- **Command Execution**: The commands are parsed and executed in sequence. Invalid commands are ignored.
- **Boundary Checks**: The robot is prevented from moving outside the 5x5 grid.

## Validations

- The `PLACE` command must be valid to initialize the robot's position.
- The robot will not move outside the boundaries of the table.
- Commands issued before a valid `PLACE` command are ignored.

## Contact

For any questions or suggestions, please open an issue or contact me at [sumitroy7774@outlook.com].
