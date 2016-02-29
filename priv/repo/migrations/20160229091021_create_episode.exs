defmodule App.Repo.Migrations.CreateEpisode do
  use Ecto.Migration

  def change do
    create table(:episodes) do
      add :headline, :text
      add :description, :text
      add :duration, :string
      add :audio_url, :text
      add :authors, :string

      timestamps
    end

  end
end
