defmodule App.Episode do
  use App.Web, :model

  schema "episodes" do
    field :headline, :string
    field :description, :string
    field :duration, :string
    field :audio, :string
    field :authors, :string

    timestamps
  end

  @required_fields ~w(headline description duration audio authors)
  @optional_fields ~w()

  @doc """
  Creates a changeset based on the `model` and `params`.

  If no params are provided, an invalid changeset is returned
  with no validation performed.
  """
  def changeset(model, params \\ :empty) do
    model
    |> cast(params, @required_fields, @optional_fields)
  end
end
