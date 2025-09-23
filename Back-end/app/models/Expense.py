from sqlmodel import Field, SQLModel

class Expense( SQLModel, table=True):
    id_expense: int = Field(default=None, primary_key=True)
    date_spent: str
    description: str
    value: float
    id_category: int
    date_registered: str 