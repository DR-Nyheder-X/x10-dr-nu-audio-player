defmodule Mix.Tasks.App.Digest do
  use Mix.Task

  def run(args) do
    Mix.Shell.IO.cmd "./node_modules/webpack/bin/webpack.js -p"
  end
end

