from sqlmodel import Field, SQLModel

class User(SQLModel, table=True):
    id: int = Field(
        default=None,
        primary_key=True,
        title="ID",
        description="Identificador único do usuário.")
    name: str = Field(
        title="Nome",
        description="Nome completo do usuário.")
    email: str = Field(
        title="E-mail",
        description="E-mail do usuário.")
    pix_key: str = Field(
        default=None,
        title="Chave Pix",
        description="Chave pix do usuário.")