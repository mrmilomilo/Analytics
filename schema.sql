CREATE TABLE [Events] (
  id INTEGER PRIMARY KEY,
  [UserId] TEXT,
  [EventName] TEXT,
  [EventTags] TEXT,
  [TimeStamp] INT,
  [Data] TEXT,
  [Location.x] INT,
  [Location.y] INT,
  [Location.z] INT,
  [Rotation.roll] INT,
  [Rotation.pitch] INT,
  [Rotation.yaw] INT
);

INSERT INTO [Events] ([UserId],[EventName],[EventTags],[TimeStamp],[Data],[Location.x],[Location.y],[Location.z],[Rotation.roll],[Rotation.pitch],[Rotation.yaw])
VALUES
('00000','Evento1','["Progression"]',1725925303957,'CustomDataField',0,0,0,0,0,0);
