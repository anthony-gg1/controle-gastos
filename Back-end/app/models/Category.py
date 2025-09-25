from sqlmodel import Field, SQLModel

class Category( SQLModel, table=True):
    id_category: int = Field(
        default=None, 
        primary_key=True,
        title="ID",
        description="Identificador único da categoria.")
    name_category: str = Field(
        unique=True,
        title="Nome da categoria",
        description="Nome que identificará a categoria.")
    description: str = Field(
        default=None,
        title="Descrição",
        description="Detalhes sobre a categoria.")