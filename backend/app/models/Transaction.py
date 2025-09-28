from sqlmodel import Field, SQLModel

class Transaction(SQLModel, table=True):
    id: int = Field(
        default=None, 
        primary_key=True,
        title="ID",
        description="Identificador único da transação.")
    value: float = Field(
        title="Valor",
        description="Valor da transação (Caso seja uma desepsa deve ser negativo, caso não, deve ser positivo).")
    description: str = Field(
        default=None,
        title="Descrição",
        description="Detalhes sobre a transação.")
    category: int = Field(
        title="Categoria",
        description="Categoria da transação.")
    date_registered: str = Field(
        title="Data de Registro",
        description="Data em que a transação foi cadastrada.")