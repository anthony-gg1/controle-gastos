from enum import Enum, auto

class CategoryExpense(Enum):
    OUTRO       = 0
    ALUGUEL     = auto()
    ALIMENTAÇÃO = auto()
    TRANSPORTE  = auto()
    CONTAS      = auto()

class CategoryRevenue(Enum):
    OUTRO       = 0
    SALARIO     = auto()
    BONUS       = auto()
    VENDA       = auto()
    REEMBOLSO   = auto()