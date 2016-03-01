defmodule App.EpisodeTest do
  use App.ModelCase
  import App.Factory

  alias App.Episode

  test "changeset with valid attributes" do
    changeset = Episode.changeset(%Episode{}, fields_for(:episode))
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = Episode.changeset(%Episode{}, %{})
    refute changeset.valid?
  end
end
