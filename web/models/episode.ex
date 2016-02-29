defmodule App.Episode do
  use App.Web, :model
  use Arc.Ecto.Model

  schema "episodes" do
    field :headline, :string
    field :description, :string
    field :duration, :string
    field :audio, App.Audio.Type
    field :authors, :string

    timestamps
  end

  @required_fields ~w(headline description duration authors)
  @optional_fields ~w()

  @required_file_fields ~w(audio)
  @optional_file_fields ~w()

  @doc """
  Creates a changeset based on the `model` and `params`.

  If no params are provided, an invalid changeset is returned
  with no validation performed.
  """
  def changeset(model, params \\ :empty) do
    model
    |> cast(params, @required_fields, @optional_fields)
    |> cast_attachments(params, @required_file_fields, @optional_file_fields)
  end
end
