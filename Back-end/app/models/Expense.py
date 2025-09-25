from sqlmodel import Field, SQLModel

class Expense( SQLModel, table=True):
    id_expense: int = Field(
        default=None, 
        primary_key=True,
        title="ID",
        description="Identificador único da despesa.")
    date_spent: str = Field(
        title="Data de gasto",
        description="Data em que a despesa foi realizada")
    description: str = Field(
        default=None,
        title="Descrição",
        description="Detalhes sobre a despesa.")
    value: float = Field(
        title="Valor",
        description="Valor da despesa.")
    id_category: int = Field(
        title="Categoria",
        description="Categoria da despesa.")
    date_registered: str = Field(
        title="Data de Registro",
        description="Data em que a despesa foi cadastrada.")