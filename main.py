import random




def youWin():
    print("  ---YOU WIN---")

def computerWin():
    print("  ---COMPUTER WINS---")

while True:
    print("\nRock, Paper, Scissors")

    player = (input("Choose: ")).upper()

    choose = ["ROCK", "PAPER", "SCISSORS"]

    computer = random.choice(choose)

    print('\n  Player: ', player)
    print('Computer: ', computer)


    if player == 'ROCK' and computer == 'PAPER':
        computerWin()
    elif player == 'PAPER' and computer == 'ROCK': 
        youWin()

    elif player == 'ROCK' and computer == 'SCISSORS':
        youWin()
    elif player == 'SCISSORS' and computer == 'ROCK':
        computerWin()
    
    elif player == 'SCISSORS' and computer == 'PAPER':
        youWin()
    elif player == 'PAPER' and computer == 'SCISSORS':
        computerWin()
    else:
        print("  ---DRAW---")