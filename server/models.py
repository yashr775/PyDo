from database import Base;
from sqlalchemy import Column , Integer , String ,Boolean



class Todos(Base):
    __tablename__ = todos

    id = Column(Intger , primary_key = True , inedex = True)
    title = Column(String)
    description = Column(String)
    priority = Column(Integer)
    complete = Column(Boolean , default=False)
