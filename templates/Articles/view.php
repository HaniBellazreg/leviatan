<h1><?= h($article->title) ?></h1>
<p><?= h($article->content) ?></p>
<p><small>Created: <?= $article->created_at->format(DATE_RFC850) ?></small></p>
<p><?= $this->Html->link('Edit', ['action' => 'edit', $article->id]) ?></p
