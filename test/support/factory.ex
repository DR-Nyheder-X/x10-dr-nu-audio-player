defmodule App.Factory do
  use ExMachina.Ecto, repo: App.Repo
  alias App.{Episode}

  def factory :episode do
    %Episode{
      headline: "Headline",
      description: "Description",
      duration: "1:00",
      audio_url: "http://example.com",
      authors: "A & B"
    }
  end
end
